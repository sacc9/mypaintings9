import { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
 




function  NewsPage() {
	return ( 
	<Fragment>
		<h1>The News Page</h1>   
		<img src="https://res.cloudinary.com/dwj3obdhh/image/upload/v1632773604/thumbnail_alfaholicsgtar021completed13_dcf4054b59.jpg" alt="Picture of the author" />
  
		<ul>
			<li>
				<Link href="/news/nextjs-very-good">
					NextJs very nextjs-very-good
				</Link>
			</li>
  		</ul>
  </Fragment>


);

}


export default NewsPage;