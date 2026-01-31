import { useEffect, useRef } from 'react'

const Confetti = ({ trigger }) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (!trigger) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles = []

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = -10
        this.size = Math.random() * 10 + 5
        this.speedX = Math.random() * 4 - 2
        this.speedY = Math.random() * 5 + 3
        this.rotation = Math.random() * Math.PI * 2
        this.rotationSpeed = Math.random() * 0.1 - 0.05
        this.type = Math.random() > 0.5 ? '❤️' : '💕'
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY
        this.rotation += this.rotationSpeed
        this.speedY += 0.1
      }

      draw() {
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(this.rotation)
        ctx.font = `${this.size}px Arial`
        ctx.fillText(this.type, -this.size / 2, this.size / 2)
        ctx.restore()
      }
    }

    for (let i = 0; i < 50; i++) {
      particles.push(new Particle())
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p, index) => {
        p.update()
        p.draw()

        if (p.y > canvas.height) {
          particles.splice(index, 1)
        }
      })

      if (particles.length > 0) {
        requestAnimationFrame(animate)
      }
    }

    animate()
  }, [trigger])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 9998
      }}
    />
  )
}

export default Confetti
