import { useEffect, useState } from "react";
import { api } from "../services/api";

export function useFetch<T = unknown>(url: string) {
  const [data, setData] = useState<T | null>(null)

  useEffect(() => {
    api.get(url)
      .then(response => {setData(response.data)
    })
  },[url])

  return {data};
}