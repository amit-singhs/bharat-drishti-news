"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Send } from 'lucide-react';


export function SubscriptionForm() {
  const [phone, setPhone] = useState("");
  const { toast } = useToast();

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone) {
      if (!/^\d{10}$/.test(phone.replace(/\s/g, ''))) {
        toast({
          title: "अमान्य फ़ोन नंबर",
          description: "कृपया 10 अंकों का वैध फ़ोन नंबर दर्ज करें।",
          variant: "destructive",
        });
        return;
      }
      console.log("Subscribed with phone:", phone);
      toast({
        title: "सफलतापूर्वक सब्सक्राइब किया गया!",
        description: "समाचार अपडेट के लिए धन्यवाद।",
      });
      setPhone("");
    } else {
        toast({
          title: "आवश्यक जानकारी",
          description: "कृपया अपना फ़ोन नंबर दर्ज करें।",
          variant: "destructive",
        });
    }
  };

  return (
    <form
      onSubmit={handlePhoneSubmit}
      className="flex w-full max-w-sm items-center space-x-2"
    >
      <Input
        type="tel"
        placeholder="मोबाइल नंबर..."
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="bg-background"
        aria-label="Mobile number for subscription"
      />
      <Button type="submit" className="bg-accent text-accent-foreground hover:bg-accent/90" size="icon" aria-label="Subscribe">
        <Send className="h-5 w-5" />
      </Button>
    </form>
  );
}
