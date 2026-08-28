import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from "react";

export type AuthUser = {
  firstName: string;
  lastName: string;
  name: string;
  email: string;
  initials: string;
  phone?: string;
  dateOfBirth?: string;
  gender?: string;
};

type RegisteredAccount = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone?: string;
  dateOfBirth?: string;
  gender?: string;
};

type SignUpData = RegisteredAccount;

type ProfileUpdate = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: string;
};

type AuthContextValue = {
  user: AuthUser | null;
  isAuthenticated: boolean;
  signIn: (email: string, password: string) => boolean;
  signUp: (data: SignUpData) => void;
  signOut: () => void;
  updateProfile: (data: ProfileUpdate) => void;
};

const SESSION_STORAGE_KEY = "style-auth-user";
const ACCOUNT_STORAGE_KEY = "style-account";

function buildInitials(firstName: string, lastName: string) {
  const firstInitial = firstName.trim().charAt(0).toUpperCase();
  const lastInitial = lastName.trim().charAt(0).toUpperCase();
  return `${firstInitial}${lastInitial}` || "JD";
}

function normalizeUser(user: Partial<AuthUser> | null): AuthUser | null {
  if (!user?.email) return null;
  const nameParts = (user.name || user.email.split("@")[0]).trim().split(/\s+/);
  const firstName = user.firstName || nameParts[0] || "John";
  const lastName = user.lastName || nameParts.slice(1).join(" ") || "Doe";
  return {
    firstName,
    lastName,
    name: `${firstName} ${lastName}`.trim(),
    email: user.email,
    initials: user.initials || buildInitials(firstName, lastName),
    phone: user.phone,
    dateOfBirth: user.dateOfBirth,
    gender: user.gender,
  };
}

function readStoredUser(): AuthUser | null {
  try {
    const stored = localStorage.getItem(SESSION_STORAGE_KEY);
    return stored ? normalizeUser(JSON.parse(stored) as Partial<AuthUser>) : null;
  } catch {
    return null;
  }
}

function readStoredAccount(): RegisteredAccount | null {
  try {
    const stored = localStorage.getItem(ACCOUNT_STORAGE_KEY);
    return stored ? (JSON.parse(stored) as RegisteredAccount) : null;
  } catch {
    return null;
  }
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(() => readStoredUser());

  const signUp = useCallback((data: SignUpData) => {
    const account: RegisteredAccount = {
      firstName: data.firstName.trim(),
      lastName: data.lastName.trim(),
      email: data.email.trim().toLowerCase(),
      password: data.password,
      phone: data.phone || "",
      dateOfBirth: data.dateOfBirth || "",
      gender: data.gender || "",
    };
    localStorage.setItem(ACCOUNT_STORAGE_KEY, JSON.stringify(account));
  }, []);

  const signIn = useCallback((email: string, password: string) => {
    const account = readStoredAccount();
    const normalizedEmail = email.trim().toLowerCase();
    if (!account || account.email !== normalizedEmail || account.password !== password) return false;

    const nextUser: AuthUser = {
      firstName: account.firstName,
      lastName: account.lastName,
      name: `${account.firstName} ${account.lastName}`.trim() || account.email.split("@")[0],
      email: account.email,
      initials: buildInitials(account.firstName, account.lastName),
      phone: account.phone,
      dateOfBirth: account.dateOfBirth,
      gender: account.gender,
    };

    localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(nextUser));
    setUser(nextUser);
    return true;
  }, []);

  const updateProfile = useCallback((data: ProfileUpdate) => {
    const account = readStoredAccount();
    if (!account) return;
    const updatedAccount: RegisteredAccount = {
      ...account,
      firstName: data.firstName.trim(),
      lastName: data.lastName.trim(),
      email: data.email.trim().toLowerCase(),
      phone: data.phone,
      dateOfBirth: data.dateOfBirth,
      gender: data.gender,
    };
    localStorage.setItem(ACCOUNT_STORAGE_KEY, JSON.stringify(updatedAccount));
    const nextUser: AuthUser = {
      firstName: updatedAccount.firstName,
      lastName: updatedAccount.lastName,
      name: `${updatedAccount.firstName} ${updatedAccount.lastName}`.trim(),
      email: updatedAccount.email,
      initials: buildInitials(updatedAccount.firstName, updatedAccount.lastName),
      phone: updatedAccount.phone,
      dateOfBirth: updatedAccount.dateOfBirth,
      gender: updatedAccount.gender,
    };
    localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(nextUser));
    setUser(nextUser);
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem(SESSION_STORAGE_KEY);
    setUser(null);
  }, []);

  const value = useMemo(
    () => ({ user, isAuthenticated: Boolean(user), signIn, signUp, signOut, updateProfile }),
    [user, signIn, signUp, signOut, updateProfile],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
}
