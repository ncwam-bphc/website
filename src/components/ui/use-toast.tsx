import { useState, useEffect, useCallback } from 'react'

interface ToastProps {
  id: number
  title: string
  description?: string
  duration?: number
}

export function useToast() {
  const [toasts, setToasts] = useState<ToastProps[]>([])

  const toast = useCallback(({ title, description, duration = 3000 }: Omit<ToastProps, 'id'>) => {
    const id = Date.now()
    setToasts(prevToasts => [...prevToasts, { id, title, description, duration }])
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setToasts(prevToasts => prevToasts.filter(toast => Date.now() - toast.id < (toast.duration ?? 3000)))
    }, 100)

    return () => clearInterval(timer)
  }, [])

  const Toaster = () => (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      {toasts.map(({ id, title, description }) => (
        <div key={id} className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-w-sm">
          <h3 className="font-semibold">{title}</h3>
          {description && <p className="text-sm text-gray-500">{description}</p>}
        </div>
      ))}
    </div>
  )

  return { toast, Toaster }
}

