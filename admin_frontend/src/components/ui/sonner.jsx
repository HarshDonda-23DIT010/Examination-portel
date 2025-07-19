import { Toaster as Sonner } from "sonner";

const Toaster = ({
  ...props
}) => {
  return (
    (<Sonner
      theme="light"
      className="toaster group"
      style={
        {
          "--normal-bg": "#ffffff",
          "--normal-text": "#000000",
          "--normal-border": "#e5e7eb"
        }
      }
      {...props} />)
  );
}

export { Toaster }
