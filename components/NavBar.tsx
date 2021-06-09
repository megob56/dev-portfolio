import React from 'react'

const NavBar = () => {
	return (
		<div style={{backgroundColor: 'red', padding: '25px'}}>
			<ul style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
				<li className='js-nav-link-home' style={{paddingLeft: '20px'}}><a href='/'>Home</a></li>
				<li style={{paddingLeft: '20px'}}><a>About Me</a></li>
				<li style={{paddingLeft: '20px'}}><a>Resume</a></li>
			</ul>
		</div>
	)
}

export default NavBar
