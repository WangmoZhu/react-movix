import './style.scss'

const ContentWrapper = ({children}: any) => {
  return (
    <div className='contentWrapper'>
      {children}
    </div>
  )
}

export default ContentWrapper