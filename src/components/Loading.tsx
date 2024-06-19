import { InfinitySpin } from 'react-loader-spinner';

const Loading = () => {
  return (
    <div style={{display: 'flex', alignItems:'center', justifyContent: 'center'}}>
      <InfinitySpin
      visible={true}
      width="150"
      color="#7478f2"
      ariaLabel="infinity-spin-loading"
  />
    </div>
  )
}

export default Loading
