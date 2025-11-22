import { Button } from "@/components/ui/button";
import { MessageCircle, Send, Phone, Mail } from "lucide-react";
import { DEALERSHIP_CONFIG } from "@/config/links";

export default function SocialLinks() {
  const { socialLinks } = DEALERSHIP_CONFIG;

  const links = [
    {
      key: "whatsapp",
      label: "WhatsApp",
      url: socialLinks.whatsapp,
      icon: MessageCircle
    },
    {
      key: "telegram",
      label: "Telegram",
      url: socialLinks.telegram,
      icon: Send
    },
    {
      key: "phone",
      label: "Phone",
      url: socialLinks.phone,
      icon: Phone
    },
    {
      key: "email",
      label: "Email",
      url: socialLinks.email,
      icon: Mail
    }
  ];

  const visibleLinks = links.filter(link => link.url);

  if (visibleLinks.length === 0) return null;

  return (
    <div className="border-t border-border mt-16 pt-16 bg-gradient-to-b from-transparent via-primary/5 to-transparent rounded-t-lg">
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
          Get In Touch
        </h3>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
          Ready to find your perfect car? Contact us through any of these channels and our team will help you get started
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        {visibleLinks.map(link => {
          const Icon = link.icon;
          
          return (
            <a
              key={link.key}
              href={link.url}
              target={link.key === "phone" || link.key === "email" ? undefined : "_blank"}
              rel={link.key !== "phone" && link.key !== "email" ? "noopener noreferrer" : undefined}
              data-testid={`link-social-${link.key}`}
            >
              <Button 
                variant="default" 
                size="lg"
                className="gap-2 bg-primary hover:bg-primary/90 transition-all duration-200"
              >
                <Icon className="w-5 h-5" />
                <span>{link.label}</span>
              </Button>
            </a>
          );
        })}
      </div>
    </div>
  );
}
