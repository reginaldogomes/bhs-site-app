import Link from "next/link";
import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";

const linkVariants = cva("px-4 py-2 rounded-md font-medium transition-all", {
  variants: {
    variant: {
      default:
        "mt-8 inline-block px-8 py-4 bg-accent text-white font-medium rounded-full shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-2xl",
      outline:
        "border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white",
    },
    size: {
      sm: "text-sm",
      lg: "text-lg",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "lg",
  },
});

interface LinkButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  href: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  className,
  variant,
  size,
  href,
  children,
  ...props
}) => {
  return (
    <Link
      href={href}
      className={cn(linkVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
