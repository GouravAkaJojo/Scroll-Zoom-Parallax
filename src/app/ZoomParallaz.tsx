'use client'
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion"
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import "./index.scss"

export default function ZoomParallex() {
    const mainRef = useRef(null)
    const [radius, setRadius] = useState(20)

    const { scrollYProgress } = useScroll({
        target: mainRef,
        offset: ["start start", "end end"]
    })

    const rounded = useTransform(scrollYProgress, [0, 1], [20, 3])
    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4])
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5])
    const scale7 = useTransform(scrollYProgress, [0, 1], [1, 7])
    const scale2 = useTransform(scrollYProgress, [0, 1], [1, 6])
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9])

    const IMGS = [
        {
            url: "/nihon.jpg",
            scale: scale4,
        },
        {
            url: "https://images.unsplash.com/photo-1551244072-5d12893278ab?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

            scale: scale2,
        },
        {
            url: "https://images.unsplash.com/photo-1708555205842-f38972eed725?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D",
            scale: scale5,
        },
        {
            url: "https://images.unsplash.com/photo-1707249696459-9f7acb0df492?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D",

            scale: scale9,
        },
        {
            url: "https://plus.unsplash.com/premium_photo-1703113593475-c6bd8ff0a04c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D",

            scale: scale7,
        }
    ]

    useEffect(() => {
        rounded.on("change", (r) => {
            setRadius(r)
        })
    }, [rounded])

    return (
        <div ref={mainRef} className="container">
            <div className='parent'>
                {IMGS.map((i, indx) => {
                    return <motion.div
                        style={{ scale: i.scale }} className="element" key={indx} >
                        <div
                            style={{
                                borderRadius: radius
                            }}
                            className="imageContainer" >
                            <Image src={i.url} alt='image' fill className='object-cover' />
                        </div>
                    </motion.div>
                })}
            </div>
        </div>
    )
}