import './Header.css'

import RESUM from '../../Assets/RESUMEEE.pdf'
const CTA = () => {
  return (
    
    <div className='cta'>
        <a href={RESUM} download className='btn'>Download cv </a>
        <a href='#Contact' className='btn btn-primary'>Let's Talk </a>
    </div>
  )
}

export default CTA
