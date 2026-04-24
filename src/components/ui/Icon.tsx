interface IconProps {
  name: string
  width?: number
  height?: number
  classes?: string
}

const Icon = ({ name, width = 24, height = 24, classes }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
      {...(classes ? { className: classes } : {})}
      aria-hidden='true'
    >
      <use href={`/svg/sprite.svg#${name}`} />
    </svg>
  )
}

export default Icon
