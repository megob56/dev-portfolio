import React from 'react'

const Footer = () => {
	return (
		<footer style={{marginTop: '64px', backgroundColor: 'yellow'}}>
      <div style={{maxWidth: '1048px', margin: '0 auto', padding: '0 1rem', width: '100%'}}>
        <ul style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <li className='js-footer-link-home'><a href='/'>Home</a></li>
          <li><a>Now</a></li>
          <li><a>My Story</a></li>
          <li><a>Contact</a></li>
        </ul>
        <p>
          Content © {new Date().getFullYear()} Meaghan OBrien. All rights reserved.
        <br />
          Code can be found on <a href="https://github.com/megob56/dev-portfolio" target="_blank">Github</a>. Built
          with <a href="https://nextjs.org/" target="_blank">Next.js</a> and hosted on <a href="https://vercel.com/home" target="_blank">Vercel</a>
        </p>
      </div>
		</footer>
	)
}

export default Footer
