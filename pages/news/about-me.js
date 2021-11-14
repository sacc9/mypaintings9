import { Fragment } from 'react';
import Link from 'next/link';

function  AboutMePage() {
return (	
        <Fragment>
  		<div style={{background: "black"}}>      
        <div className="header">
        <ul>
          <li><Link href="/news/images">
          <p>Home</p>
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
  			<h1>About me</h1>
  		</div>
     
		<style jsx>{`	
	    .header {
	      height: 80px;
	    }  


	    .header ul {
	      overflow: hidden;
	    }

	    .header li {
	      float: right;
	      display: inline-block;
	      list-style: none;
	      text-decoration: none;
	      width: 120px;
	      margin-right: 50px;
	      transition: 0.5s;
	    }

	    .header li:hover {
	      width: 170px;
	      margin-right: 0px;
	    }

	    .header p {
	      color: white;
	      font-size: 18pt;
	      
	    }

	    .header p:hover {
	      cursor: pointer;
	      background: #777;
	    }

		div div{
		   max-width: 80%;
		   background: black;
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


export default AboutMePage;