"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { Field, FieldError, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Phone } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

const FormCreateCallSchema = z.object({
  name: z
    .string()
    .min(3, "must be at least 3 characters long")
    .max(50, "must be at most 50 characters long"),
});

const FormCreateCall = () => {
  const form = useForm({
    resolver: zodResolver(FormCreateCallSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof FormCreateCallSchema>) => {
    const { name } = values;
    const { data: authUser } = await supabase.auth.signInAnonymously();

    if (!authUser.user) {
      toast.error("Error creating queue, please try again later");
      return;
    }

    const startOfToday = new Date();
    startOfToday.setHours(0, 0, 0, 0);

    const endOfToday = new Date(startOfToday);
    endOfToday.setDate(startOfToday.getDate() + 1);

    const { count, error: countError } = await supabase
      .from("queues")
      .select("*", { count: "exact", head: true })
      .gte("created_at", startOfToday.toISOString())
      .lte("created_at", endOfToday.toISOString());

    if (countError) {
      console.log({ countError });
      toast.error("Error count queues, please try again later");
      return;
    } else if (count && count >= 30) {
      toast.error("Have reached the limit of 30 queues per day");
      return;
    }

    const { error } = await supabase
      .from("queues")
      .insert([
        {
          name,
          status: "waiting",
        },
      ])
      .select()
      .single();

    if (error) {
      console.log({ error });
      toast.error("Error creating queue, please try again later");
      return;
    }

    toast.success("Queue created successfully");

    form.reset();
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <Controller
        name="name"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState}>
            <FieldLabel
              htmlFor={field.name}
              className="font-extrabold uppercase"
            >
              Call Subject / Name
            </FieldLabel>
            <Input
              {...field}
              id={field.name}
              aria-invalid={fieldState.invalid}
              placeholder="ENTER CALLER IDENTIFIER..."
              autoComplete="off"
              className="bg-brutal-yellow"
            />
            {fieldState.invalid && (
              <FieldError className="text-lg" errors={[fieldState.error]} />
            )}
          </Field>
        )}
      />
      <Button
        type="submit"
        className="mt-12 bg-brutal-blue uppercase w-full py-8 tex-sm sm:text-lg md:text-xl font-bold flex items-center justify-center gap-2"
      >
        <Phone />
        Launch call to monitor
      </Button>
    </form>
  );
};

export default FormCreateCall;
