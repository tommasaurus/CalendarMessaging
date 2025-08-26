import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const textVariants = cva(
  "text-foreground",
  {
    variants: {
      variant: {
        // Headers
        h1: "text-4xl font-extrabold tracking-tight lg:text-5xl",
        h2: "text-3xl font-semibold tracking-tight",
        h3: "text-2xl font-semibold tracking-tight",
        h4: "text-xl font-semibold tracking-tight",
        h5: "text-lg font-semibold tracking-tight",
        h6: "text-base font-semibold tracking-tight",
        
        // Body text
        large: "text-lg font-semibold",
        medium: "text-base font-medium",
        small: "text-sm font-normal",
        small_bold: "text-sm font-semibold",
        xs: "text-xs font-normal",
        xs_bold: "text-xs font-semibold",
        
        // Special variants
        lead: "text-xl text-muted-foreground",
        muted: "text-sm text-muted-foreground",
        subtle: "text-xs text-muted-foreground",
      },
      weight: {
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold",
        extrabold: "font-extrabold",
      },
    },
    defaultVariants: {
      variant: "medium",
    },
  }
)

export type TextProps = {
  variant?: VariantProps<typeof textVariants>["variant"]
  weight?: VariantProps<typeof textVariants>["weight"]
  className?: string
  children: React.ReactNode
}

export function Text({ variant, weight, className, children, ...props }: TextProps) {
  return (
    <span 
      className={cn(textVariants({ variant, weight }), className)} 
      {...props}
    >
      {children}
    </span>
  )
}
