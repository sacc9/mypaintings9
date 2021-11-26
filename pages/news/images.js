import { Navbar } from 'react';
import { Container } from 'react';
import { Brand } from 'react';
import Head from 'next/head';
import { Fragment } from 'react';
import Link from 'next/link';

export async function getServerSideProps() {

	const res = await fetch("https://mypaintings9-admin.herokuapp.com/images");
	const data = await res.json();

	//	{image.name[0].formats.small.url}

	return {
		props: { images: data}
	}

}

	const Images = ({images}) => {
  		return (	
        <Fragment>
  		  <Head>
        		<title>My page title</title>
        		<meta name="viewport" content="initial-scale=1.0, width=device-width" />
      	</Head>

  		<div style={{background: "white"}}>

        <div className="toggle">
						<img src="https://img.icons8.com/ios/50/000000/menu--v1.png"/>
      	</div>
        <div className="header">
        <ul>
          <li><p>LOGO</p></li>
          <li><Link href="/news/images">
          <p>Portfolio</p>
        </Link></li>
          <li><Link href="/news/about-me">
          <p>About me</p>
        </Link></li>
          <li><Link href="/news/contact">
          <p>Contact</p>
        </Link></li>
        </ul>
         </div>  
  		<div>
  			<h1></h1>
  		<div>
		  	{images.map(image => (
		  		<div key={image.id}>
	  				<img src={image.name[0].formats.small.url}/>
		  		</div>
		  	))} 		

  		</div>
  		<div className="footer">
  			
  		</div>
  	</div>
     
		<style jsx>{`	

    .header 
    {
    	height: 100px;
    	position: relative;
    }  

    .header ul 
    {      
    	position: relative;
    	align-items: center;
    	vertical-align: middle;
      overflow: hidden;
      margin-top: 20px;
    }

    .header li 
    {
    	text-align: center;
    	vertical-align: middle;
    }

    .header li:first-child  
    {      
      float: left;
      display: inline-block;
      margin-right: 50px; 
    }

    .header li:not(:first-child) 
    { 
      float: left;
      display: inline-block;
      list-style: none;
      text-align: center;
      text-decoration: none;
      width: 120px;
      margin-left: 25px;
      margin-right: 25px;
      transition: 0.5s;
    }


    .header li:last-child 
    { 
      float: right;
    }

    .header li:hover:not(:first-child) 
    {  
      width: 170px;
      margin-left: 0px;
      margin-right: 0px;
      background: grey;
    }

    .header p 
    { 
      color: black;
      font-size: 18pt;
    }

    .header p:hover 
    {  
      cursor: pointer;
    }

		.toggle	
		{
			display: flex;
    	align-items: center;
			height: 100px;
			line-height: 100px;
			text-align: right;
			box-sizing: border-box;
			color: #fff;
			font-size: 30px;
			display: none;
		}

		.toggle img 
		{
			margin-top: 35px;
		}

		.toggle img:hover 
		{
			cursor: pointer;
		}

		@media screen and (max-width:920px) {
			.toggle
			{
			  top: 20px;
				width: 100%;
				display: block;
			}

			.header 
			{
				display: none;
			}

		}

		div div {
		   
		   max-width: 80%;
		   background: white;
		   margin: 0 auto;
		   padding-top: 10px;
		}

		div div h1 {
		   
		   color: white;
		}

		div div div {
		  
		  display: flex;
		  flex-wrap: wrap;
		  max-width: 100%;
		  background: ;
		}	

		div div div div {
		  
		  max-height: 60vh;
		  flex-grow: 1;
		  padding: 5px;
		  background: ;
		}

		div div div div img {
		  
		  max-height: 100%;
		  min-width: 100%;
		  object-fit: cover;
		  vertical-align: bottom;
		  transition: all 0.7s;
		} 

		div div div div img:hover {
			
			transform: scale(0.95);
		}

		.footer 
		{
			height:100px;
		}

      `}</style> 
            <style jsx global>{`
        p {
          font-size: 26px;
        }
      `}</style>       
  </div>
</Fragment>
  		);

  	}


  	export default Images;

