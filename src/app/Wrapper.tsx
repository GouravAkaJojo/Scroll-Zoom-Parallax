"use client"
import Lenis from '@studio-freight/lenis'
import React, { ReactNode, useEffect } from 'react'

export default function Wrapper({ children }: { children: ReactNode }) {

    useEffect(() => {
        const lenis = new Lenis()

        function raf(time: any) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])

    return (
        <div>
            {children}
        </div>
    )
}
