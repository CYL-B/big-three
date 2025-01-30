import { useMutation } from "@tanstack/react-query";
export function useScore() {
  const mutation = useMutation({
    mutationFn: async (result) => {
      const response = await fetch("http://localhost:3000/score",{
        method: "POST",
        mode: "cors",
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ result }),
      });
      return await response.json();
    },
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log("error",error);
    },
    onSettled: () => {
      console.log("onSettled");
    },
    
  });

  return {mutation};
}
