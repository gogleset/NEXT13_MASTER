"use client"

import { useRouter } from "next/navigation"

const Navigation = () => {
    const router = useRouter()
    
    function onClickHandler(event: React.MouseEvent<HTMLUListElement> ) {
        const target = event.target as HTMLUListElement
        const value = target.innerHTML;
        router.push(`/${value}`)
    }
  return (
      <ul className="flex bg-slate-500" onClick={onClickHandler}>
          <li className="mr-2 cursor-pointer">
              dashboard
          </li>
          <li className="mr-2 cursor-pointer">
              guides
          </li>
          <li className="mr-2 cursor-pointer">
              docs
          </li>
          <li className="mr-2 cursor-pointer">
              login
          </li>
    </ul>
  )
}

export default Navigation