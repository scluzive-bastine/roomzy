import { useProviderContext } from '../../context/context'

const MobileReserveButton = () => {
  const { toggleCheckout } = useProviderContext()
  return (
    <div className="fixed bottom-0 z-10 w-full bg-gradient-to-r from-[#e0602e] to-[#91e9e2] pt-1 md:hidden ">
      <div className="flex justify-between bg-white px-4 py-2">
        <div>
          <div>
            $98 <span className="text-sm text-gray-500">night</span>
          </div>
          <div className="text-sm text-gray-500">2 guests . Jan 8 - 18</div>
        </div>
        <button className="btn" onClick={toggleCheckout}>
          Reserve
        </button>
      </div>
    </div>
  )
}

export default MobileReserveButton
