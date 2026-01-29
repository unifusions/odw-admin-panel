import { router } from "@inertiajs/react"
import { useState } from "react"

export default function useDeleteModal() {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [item, setItem] = useState(null)
  const [routeName, setRouteName] = useState(null)
  const [routeParams, setRouteParams] = useState(null)

  const confirm = (item, routeName, routeParams = item.id) => {
    setItem(item)
    setRouteName(routeName)
    setRouteParams(routeParams)
    setOpen(true)
  }

  const destroy = () => {
    setLoading(true)

    router.delete(route(routeName, routeParams), {
      preserveScroll: true,
      onFinish: () => {
        setLoading(false)
        setOpen(false)
      },
    })
  }

  return {
    open,
    setOpen,
    loading,
    item,
    confirm,
    destroy,
  }
}
