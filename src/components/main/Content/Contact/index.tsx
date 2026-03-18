import { Button } from "@/components/ui/button";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { DownloadIcon } from "lucide-react";
import cvfile from "@/assets/files/Agustin-Thomas-Guevara-CV.pdf";

const formSchema = z.object({
  user_name: z.string(),
  user_email: z.string().email(),
  message: z.string().max(1000).min(5),
});

const Contact: React.FC = () => {
  const formRef = useRef(null);
  const [disableEmail, setDisableEmail] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "",
    },
  });

  const handleSubmit = (): Promise<void> => {
    return emailjs
      .sendForm("service_wprwqmp", "template_jmluisp", formRef.current || "", {
        publicKey: "OLH77Cps8Cc2kmp8H",
      })
      .then(
        () => {
          setDisableEmail(true);
          toast("Email sent!");
        },
        (error) => {
          toast("Couldn't send email");
          console.log("Email error on send...", error);
        },
      );
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-xl mx-auto">
      <h1 className="font-homeVideo text-zinc-100 text-[13px] tracking-widest uppercase">
        Contact
      </h1>
      <p className="font-homeVideo text-zinc-300 text-[11px]">
        Need a Front End Developer? Contact me through{" "}
        <a
          href="www.linkedin.com/in/agusguevara"
          target="_blank"
          className="text-white underline underline-offset-2"
        >
          LinkedIn
        </a>
        , or send me an email directly below.
      </p>
      <Form {...form}>
        <form
          ref={formRef}
          className="flex flex-col gap-4"
          onSubmit={form.handleSubmit(handleSubmit)}
        >
          <input
            type="hidden"
            name="access_key"
            value="37c6e0f3-710f-42a9-b329-7084bd0f1695"
          />
          <FormField
            control={form.control}
            name="user_name"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel
                    className="font-homeVideo text-zinc-500 text-[13px] tracking-widest uppercase"
                    htmlFor="user_name"
                    asChild
                  >
                    <legend>Full Name</legend>
                  </FormLabel>
                  <FormMessage />
                  <Input
                    placeholder="Full Name"
                    className="w-full bg-transparent border-0 border-b border-zinc-700 rounded-none p-2 text-zinc-100 font-homeVideo placeholder:text-zinc-600 focus-visible:ring-0 focus-visible:border-zinc-400"
                    type="text"
                    {...field}
                  />
                </FormItem>
              );
            }}
          />
          <FormField
            name="user_email"
            control={form.control}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel
                    className="font-homeVideo text-zinc-500 text-[13px] tracking-widest uppercase"
                    htmlFor="user_email"
                    asChild
                  >
                    <legend>Email address</legend>
                  </FormLabel>
                  <FormMessage />
                  <Input
                    placeholder="Email address"
                    type="email"
                    className="w-full bg-transparent border-0 border-b border-zinc-700 rounded-none p-2 text-zinc-100 font-homeVideo placeholder:text-zinc-600 focus-visible:ring-0 focus-visible:border-zinc-400"
                    {...field}
                  />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel
                    className="font-homeVideo text-zinc-500 text-[13px] tracking-widest uppercase"
                    htmlFor="message"
                    asChild
                  >
                    <legend>Message</legend>
                  </FormLabel>
                  <FormMessage />
                  <Textarea
                    placeholder="Your message..."
                    className="w-full bg-transparent border border-zinc-700 rounded-none p-2 resize-none text-zinc-100 font-homeVideo placeholder:text-zinc-600 focus-visible:ring-0 focus-visible:border-zinc-400"
                    {...field}
                  />
                </FormItem>
              );
            }}
          />
          <Button
            type="submit"
            className="font-homeVideo bg-transparent border border-zinc-600 hover:bg-zinc-900 text-zinc-100 rounded-none tracking-widest"
            disabled={disableEmail}
          >
            Send
          </Button>
        </form>
      </Form>
      <a download="Agustin-Thomas-Guevara.pdf" href={cvfile}>
        <Button
          type="button"
          className="w-full font-homeVideo bg-transparent border border-zinc-600 hover:bg-zinc-900 text-zinc-100 rounded-none tracking-widest"
        >
          <span>CV</span>
          <span className="pl-2 w-3">
            <DownloadIcon />
          </span>
        </Button>
      </a>
      <Toaster />
    </div>
  );
};

export default Contact;
