import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/jogadores")({
  beforeLoad: () => {
    throw redirect({ to: "/" });
  },
});
