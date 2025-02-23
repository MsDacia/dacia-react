import { percent } from 'csx'
import { JSX } from 'react'
import { style } from 'typestyle'

import a from './a.svg'
import frame from './frame.svg'
import image from './image.svg'
import rectangle3 from './rectangle-3.png'

import * as theme from '../styles.ts'

import unsplashIXvfntqjwi from './unsplash-i-xvfntqjwi.png'
import unsplashIgheu30Xai8 from './unsplash-igheu30xai8.png'
import unsplashOhkelokq3Re from './unsplash-ohkelokq3re.svg'
import unsplashSpvhcbuki6E from './unsplash-spvhcbuki6e.png'
import vector1 from './vector-1.svg'
import vector2 from './vector-2.svg'
import vector3 from './vector-3.svg'
import vector7 from './vector-7.svg'
import vector8 from './vector-8.svg'

export const Portfolio = (): JSX.Element => {
	return (
		<div className={stylePortfolio}>
			<div className={stylePortfolioContainer}>
				<div className={styleOverlap}>
					<div className="rectangle" />

					<img
						alt="Rectangle"
						className="image"
						src={rectangle3}
					/>
				</div>

				<div className={styleOverlapGroup}>
					<img className="a" alt="A" src={a} />

					<div className="text-wrapper">About</div>
				</div>

				<div className="overlap-2">
					<img className="unsplash" alt="Unsplash" src={unsplashOhkelokq3Re} />

					<div className="text-wrapper-2">Home</div>

					<div className="text-wrapper-3">Portfolio</div>

					<div className="text-wrapper-4">Contact</div>
				</div>

				<div className="text-wrapper-5">Nakul Kumar</div>

				<div className="welcome">WELCOME</div>

				<p className="CEO-UXM-creative">CEO , UXM CREATIVE STUDIO</p>

				<div className="text-wrapper-6">I’m Nakul Kumar</div>

				<div className="download-CV-wrapper">
					<div className="download-CV">Download Cv</div>
				</div>

				<div className="div-wrapper">
					<div className="download-CV-2">Download Cv</div>
				</div>

				<div className="text-wrapper-7">Client</div>

				<div className="text-wrapper-8">Client</div>

				<div className="text-wrapper-9">Client</div>

				<div className="text-wrapper-10">Client</div>

				<div className="text-wrapper-11">Client</div>

				<div className="text-wrapper-12">My Work Experiance</div>

				<div className="intrested-in-my-work">Intrested In My Work</div>

				<p className="lorem-ipsum-dolor">
					Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Fusce
					Sollicitudin Ut Augue Netus Fusce Fringilla. Aliquam Blandit Enim Odio
					Cursus Id. Pulvinar Commodo Pellentesque Non Massa, Nunc Massa Nisi
					Est Id. Diam Est Molestie Massa Commodo Pulvinar Aliquam Arcu Gravida.
					Dictum Pretium Senectus Dolor Vulputate Tempor Ac Vel. Placerat Proin
					Sed Risus At Fusce Aliquam. Convallis Varius Auctor Quam Fusce Diam.
					Vulputate Enim Est Nibh Diam Pellentesque. Adipiscing Dolor Turpis
					Egestas Velit Sit Feugiat Ultricies.
					<br />
					id Ac Placerat Dolor Sem Neque Elit. Ut Nisl Turpis Nisi Etiam Ac
					Nibh.
				</p>

				<div className="overlap-3">
					<div className="text-wrapper-13">Company Name</div>

					<div className="sr-manager">Sr.manager</div>

					<div className="text-wrapper-14">2016-2022</div>
				</div>

				<img
					className="unsplash-igheuxai"
					alt="Unsplash"
					src={unsplashIgheu30Xai8}
				/>

				<img
					className="unsplash-spvhcbukie"
					alt="Unsplash"
					src={unsplashSpvhcbuki6E}
				/>

				<img
					className="unsplash-i-xvfntqjwi"
					alt="Unsplash i xvfntqjwi"
					src={unsplashIXvfntqjwi}
				/>

				<img className="vector" alt="Vector" src={vector1} />

				<img className="vector-2" alt="Vector" src={vector2} />

				<div className="text-wrapper-15">My Skills</div>

				<div className="language">Language</div>

				<div className="text-wrapper-16">Studies</div>

				<img className="vector-3" alt="Vector" src={vector7} />

				<img className="vector-4" alt="Vector" src={vector8} />

				<img className="vector-5" alt="Vector" src={vector3} />

				<div className="overlap-4">
					<div className="text-wrapper-17">4.0</div>
				</div>

				<div className="overlap-5">
					<div className="text-wrapper-17">4.0</div>
				</div>

				<div className="overlap-6">
					<div className="text-wrapper-18">4.8</div>
				</div>

				<div className="overlap-7">
					<div className="text-wrapper-18">4.8</div>
				</div>

				<div className="adobe-photoshop">Adobe Photoshop</div>

				<div className="adobe-photoshop-2">Adobe Photoshop</div>

				<div className="text-wrapper-19">Microsoft Excel</div>

				<div className="text-wrapper-20">Microsoft Excel</div>

				<div className="text-wrapper-21">English</div>

				<div className="text-wrapper-22">Christ University</div>

				<div className="text-wrapper-23">Christ University</div>

				<div className="BBA">Bba</div>

				<div className="PUC">Puc</div>

				<div className="text-wrapper-24">2019</div>

				<div className="text-wrapper-25">2016</div>

				<div className="text-wrapper-26">French</div>

				<div className="rectangle-2" />

				<div className="rectangle-3" />

				<div className="text-wrapper-27">Fluent</div>

				<div className="text-wrapper-28">Good</div>

				<div className="frame-wrapper">
					<img className="frame" alt="Frame" src={frame} />
				</div>

				<div className="img-wrapper">
					<img className="frame" alt="Frame" src={image} />
				</div>

				<p className="download-my-cv-to">
					Download My Cv To Know More About Me
				</p>
			</div>
		</div>
	)
}

export default Portfolio

const styleOverlap = style({
	height: 554,
	left: 141,
	position: 'absolute',
	top: 996,
	width: 509,

	$nest: {
		'.rectangle': {
			backgroundColor: '#5a6c6c',
			height: 543,
			left: 0,
			position: 'absolute',
			top: 0,
			width: 384,
		},

		'.image': {
			height: 519,
			left: 39,
			objectFit: 'cover',
			position: 'absolute',
			top: 35,
			width: 470,
		},
	},
})

const styleOverlapGroup = style({
	height: 172,
	left: 764,
	position: 'absolute',
	top: 1076,
	width: 308,

	$nest: {
		'a': {
			height: 128,
			left: 0,
			position: 'absolute',
			top: 0,
			width: 95,
		},

		'.text-wrapper': {
			color: '#ffffff',
			fontFamily: '"Poppins-SemiBold", Helvetica',
			fontSize: 93.9,
			fontWeight: 600,
			left: 0,
			letterSpacing: 4.69,
			lineHeight: 'normal',
			position: 'absolute',
			top: 31,
		},
	}
})


const stylePortfolio = style({
	backgroundColor: theme.colorDark,
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'center',
	width: percent(100),
})

const stylePortfolioContainer = style({
	backgroundColor: theme.colorDark,
	maxWidth: 1440,
	overflow: 'hidden',
	position: 'relative',
})
