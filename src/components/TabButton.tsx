import React from 'react'

function TabButton({actiive, selectTab, children}: any) {
  const buttonClasses = actiive ? 'text-blue-700 border-b border-blue-700 ' : 'text-white'
  
  
  
    return (
    <button onClick={selectTab}>
        <p className={`mr-3 font-semibold hover:text-blue-700 ${buttonClasses}`}>
        {children}
        </p>
            </button>
  )
}

export default TabButton