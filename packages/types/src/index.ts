// Role Enumeration
export type UserRole = 'OWNER' | 'MANAGER' | 'RECEPTIONIST' | 'STYLIST' | 'CUSTOMER';

// Appointment Status
export type AppointmentStatus = 'PENDING' | 'CONFIRMED' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED' | 'NO_SHOW';

// Payment Status & Method
export type PaymentStatus = 'UNPAID' | 'PARTIAL' | 'PAID' | 'REFUNDED';
export type PaymentMethod = 'CASH' | 'CARD' | 'UPI' | 'RAZORPAY' | 'STRIPE';

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: UserRole;
  avatarUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Customer {
  id: string;
  userId: string;
  name: string;
  email: string;
  phone: string;
  loyaltyPoints: number;
  totalSpent: number;
  lastVisit?: string;
  notes?: string;
  avatarUrl?: string;
}

export interface Employee {
  id: string;
  userId: string;
  name: string;
  role: UserRole;
  specialties: string[];
  rating: number;
  bio?: string;
  avatarUrl?: string;
  isAvailable: boolean;
}

export interface SalonService {
  id: string;
  title: string;
  category: 'Haircut' | 'Styling' | 'Coloring' | 'Facial & Spa' | 'Beard & Grooming' | 'Nails & Beauty';
  description: string;
  price: number;
  durationMinutes: number;
  imageUrl?: string;
  isPopular?: boolean;
}

export interface Appointment {
  id: string;
  customerId: string;
  customerName: string;
  customerPhone: string;
  serviceId: string;
  serviceName: string;
  servicePrice: number;
  employeeId?: string;
  employeeName?: string;
  startTime: string; // ISO String
  endTime: string;   // ISO String
  status: AppointmentStatus;
  notes?: string;
  createdAt: string;
}

export interface Invoice {
  id: string;
  appointmentId: string;
  customerId: string;
  customerName: string;
  subtotal: number;
  tax: number;
  discount: number;
  total: number;
  paymentStatus: PaymentStatus;
  paymentMethod: PaymentMethod;
  issuedAt: string;
}

export interface Review {
  id: string;
  customerName: string;
  customerAvatar?: string;
  rating: number;
  comment: string;
  serviceName: string;
  createdAt: string;
}

export interface DashboardMetrics {
  totalRevenue: number;
  revenueGrowthPercent: number;
  totalAppointments: number;
  activeCustomers: number;
  topStylists: { name: string; appointmentsCount: number; revenue: number }[];
  todayAppointments: Appointment[];
  recentReviews: Review[];
}
