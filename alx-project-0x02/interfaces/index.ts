// Card component interface
export interface CardProps {
  title: string;
  content: string;
}

// Button component interface
export interface ButtonProps {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  onClick?: () => void;
  className?: string;
}

// Post component interface
export interface PostProps {
  id: number;
  title: string;
  body: string;
  userId: number;
}

// User component interface
export interface UserProps {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}

// Post modal interface
export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (title: string, content: string) => void;
} 