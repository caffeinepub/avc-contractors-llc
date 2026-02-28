import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useSubmitContactForm() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      name,
      phone,
      email,
      message,
      serviceType,
    }: {
      name: string;
      phone: string;
      email: string;
      message: string;
      serviceType: string;
    }) => {
      if (!actor) throw new Error("Not connected to backend");
      await actor.submitContactForm(name, phone, email, message, serviceType);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["submissions"] });
    },
  });
}
