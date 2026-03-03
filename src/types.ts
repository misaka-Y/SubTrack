export type SubscriptionStatus = 'active' | 'paused' | 'cancelled' | 'expired';
export type BillingCycle = 'monthly' | 'quarterly' | 'semi-annually' | 'yearly';

export interface Subscription {
  id: string;
  name: string;
  price: number;
  currency: string;
  cycle: BillingCycle;
  startDate: string;
  endDate?: string;
  nextBillingDate: string;
  status: SubscriptionStatus;
  category: string;
  color: string;
  icon?: string;
}

export interface SpendingStats {
  monthlyTotal: number;
  yearlyTotal: number;
  activeCount: number;
  categoryBreakdown: { name: string; value: number; color: string }[];
  itemBreakdown: { name: string; value: number; color: string }[];
}

export interface UserProfile {
  name: string;
  email: string;
  avatar: string;
}
