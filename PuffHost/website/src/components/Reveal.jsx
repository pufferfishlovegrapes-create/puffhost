import { useScrollReveal } from '../hooks/useScrollReveal'

export function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }) {
  const [ref, visible] = useScrollReveal()
  return (
    <Tag
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
