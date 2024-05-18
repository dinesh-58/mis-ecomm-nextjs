import React from 'react';
import Image from 'next/image';

export default function ProductCard({
        title,
        author,
        coverImg,
        priceInPaisa,
        category,
    } : {
            title: string,
            author: string,
            coverImg: {},
            priceInPaisa: number,
            category?: string,
        }) {
    const coverImgAttributes = coverImg.data.attributes;
    return (
            <div className="card w-96 bg-base-100 shadow-xl">
                <Image src={coverImgAttributes.formats.thumbnail.url} 
                    width={coverImgAttributes.formats.thumbnail.width}
                    height={coverImgAttributes.formats.thumbnail.height}
                    alt={coverImgAttributes.alternativeText || ''}
                />
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{category}</div> 
                    </div>
                </div>
                <div>{author}</div>
                <div>Rs. {priceInPaisa / 100}</div>
           </div>
           )
}
