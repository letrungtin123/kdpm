import React from 'react'

export const DashboardIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { height = 16, width = 16, className, ...rest } = props
  return (
    <svg
      width={width}
      height={height}
      className={className}
      {...rest}
      viewBox='0 0 18 17'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M3.15625 2.94922C4.78906 1.31641 6.73698 0.5 9 0.5C11.263 0.5 13.1966 1.31641 14.8008 2.94922C16.4336 4.55339 17.25 6.48698 17.25 8.75C17.25 11.013 16.4336 12.9609 14.8008 14.5938C13.1966 16.1979 11.263 17 9 17C6.73698 17 4.78906 16.1979 3.15625 14.5938C1.55208 12.9609 0.75 11.013 0.75 8.75C0.75 6.48698 1.55208 4.55339 3.15625 2.94922ZM13.8555 3.89453C12.5091 2.54818 10.8906 1.875 9 1.875C7.10938 1.875 5.49089 2.54818 4.14453 3.89453C2.79818 5.24089 2.125 6.85938 2.125 8.75C2.125 10.6406 2.79818 12.2591 4.14453 13.6055C5.49089 14.9518 7.10938 15.625 9 15.625C10.8906 15.625 12.5091 14.9518 13.8555 13.6055C15.2018 12.2591 15.875 10.6406 15.875 8.75C15.875 6.85938 15.2018 5.24089 13.8555 3.89453ZM8.48438 2.77734C8.6276 2.63411 8.79948 2.5625 9 2.5625C9.20052 2.5625 9.35807 2.63411 9.47266 2.77734C9.61589 2.89193 9.6875 3.04948 9.6875 3.25C9.6875 3.45052 9.61589 3.6224 9.47266 3.76562C9.35807 3.88021 9.20052 3.9375 9 3.9375C8.79948 3.9375 8.6276 3.88021 8.48438 3.76562C8.36979 3.6224 8.3125 3.45052 8.3125 3.25C8.3125 3.04948 8.36979 2.89193 8.48438 2.77734ZM4.61719 4.41016C4.76042 4.26693 4.91797 4.19531 5.08984 4.19531C5.29036 4.19531 5.46224 4.26693 5.60547 4.41016C5.7487 4.52474 5.82031 4.68229 5.82031 4.88281C5.82031 5.05469 5.7487 5.21224 5.60547 5.35547C5.46224 5.4987 5.29036 5.57031 5.08984 5.57031C4.91797 5.57031 4.76042 5.4987 4.61719 5.35547C4.5026 5.21224 4.44531 5.05469 4.44531 4.88281C4.44531 4.68229 4.5026 4.52474 4.61719 4.41016ZM12.3945 4.36719L13.3828 5.35547L10.332 8.40625C10.3607 8.52083 10.375 8.63542 10.375 8.75C10.375 9.1224 10.2318 9.45182 9.94531 9.73828C9.6875 9.99609 9.3724 10.125 9 10.125C8.6276 10.125 8.29818 9.99609 8.01172 9.73828C7.75391 9.45182 7.625 9.1224 7.625 8.75C7.625 8.3776 7.75391 8.0625 8.01172 7.80469C8.29818 7.51823 8.6276 7.375 9 7.375C9.11458 7.375 9.22917 7.38932 9.34375 7.41797L12.3945 4.36719ZM2.98438 8.27734C3.1276 8.13411 3.29948 8.0625 3.5 8.0625C3.70052 8.0625 3.85807 8.13411 3.97266 8.27734C4.11589 8.39193 4.1875 8.54948 4.1875 8.75C4.1875 8.95052 4.11589 9.1224 3.97266 9.26562C3.85807 9.38021 3.70052 9.4375 3.5 9.4375C3.29948 9.4375 3.1276 9.38021 2.98438 9.26562C2.86979 9.1224 2.8125 8.95052 2.8125 8.75C2.8125 8.54948 2.86979 8.39193 2.98438 8.27734ZM13.9844 8.27734C14.1276 8.13411 14.2995 8.0625 14.5 8.0625C14.7005 8.0625 14.8581 8.13411 14.9727 8.27734C15.1159 8.39193 15.1875 8.54948 15.1875 8.75C15.1875 8.95052 15.1159 9.1224 14.9727 9.26562C14.8581 9.38021 14.7005 9.4375 14.5 9.4375C14.2995 9.4375 14.1276 9.38021 13.9844 9.26562C13.8698 9.1224 13.8125 8.95052 13.8125 8.75C13.8125 8.54948 13.8698 8.39193 13.9844 8.27734ZM4.61719 12.1445C4.76042 12.0013 4.91797 11.9297 5.08984 11.9297C5.29036 11.9297 5.46224 12.0013 5.60547 12.1445C5.7487 12.2878 5.82031 12.4596 5.82031 12.6602C5.82031 12.832 5.7487 12.9896 5.60547 13.1328C5.46224 13.2474 5.29036 13.3047 5.08984 13.3047C4.91797 13.3047 4.76042 13.2474 4.61719 13.1328C4.5026 12.9896 4.44531 12.832 4.44531 12.6602C4.44531 12.4596 4.5026 12.2878 4.61719 12.1445ZM12.3945 12.1445C12.5378 12.0013 12.6953 11.9297 12.8672 11.9297C13.0677 11.9297 13.2253 12.0013 13.3398 12.1445C13.4831 12.2878 13.5547 12.4596 13.5547 12.6602C13.5547 12.832 13.4831 12.9896 13.3398 13.1328C13.2253 13.2474 13.0677 13.3047 12.8672 13.3047C12.6953 13.3047 12.5378 13.2474 12.3945 13.1328C12.2513 12.9896 12.1797 12.832 12.1797 12.6602C12.1797 12.4596 12.2513 12.2878 12.3945 12.1445Z'
        fill='fill-current'
      />
    </svg>
  )
}

export const BarsIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { height = 16, width = 16, className, ...rest } = props
  return (
    <svg
      width={width}
      height={height}
      className={className}
      {...rest}
      viewBox='0 0 18 13'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M0.75 0.5625H17.25V1.9375H0.75V0.5625ZM0.75 6.0625H17.25V7.4375H0.75V6.0625ZM0.75 11.5625H17.25V12.9375H0.75V11.5625Z'
        fill='fill-current'
      />
    </svg>
  )
}

export const GlassesIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { height = 16, width = 16, className, ...rest } = props
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      className={className}
      {...rest}
      viewBox='0 0 17 17'
      fill='none'
    >
      <g opacity='0.5'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M9.69355 12.5352C12.4234 11.375 13.6959 8.22157 12.5357 5.49174C11.3756 2.7619 8.2221 1.48942 5.49227 2.64957C2.76243 3.80972 1.48995 6.96318 2.6501 9.69302C3.81025 12.4229 6.96372 13.6953 9.69355 12.5352Z'
          stroke='black'
          strokeWidth='1.2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M11.3902 11.3896L15.5556 15.5555'
          stroke='black'
          strokeWidth='1.2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
    </svg>
  )
}

export const BellIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { height = 16, width = 16, className, ...rest } = props
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      className={className}
      {...rest}
      viewBox='0 0 24 26'
      fill='none'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10.0277 0C7.73472 0 5.80843 1.72411 5.55522 4.00306L4.5 13.5H1.5C0.671573 13.5 0 14.1716 0 15V16.5C0 17.3284 0.671573 18 1.5 18H22.5C23.3284 18 24 17.3284 24 16.5V15C24 14.1716 23.3284 13.5 22.5 13.5H19.5L18.4448 4.00306C18.1916 1.72411 16.2653 0 13.9723 0H10.0277Z'
        fill='#4880FF'
      />
      <rect opacity='0.3' x={9} y='19.5' width={6} height={6} rx='2.25' fill='#FF0000' />
    </svg>
  )
}

export const ArrowDownSmallIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { height = 16, width = 16, className, ...rest } = props
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      className={className}
      {...rest}
      viewBox='0 0 10 6'
      fill='none'
    >
      <path
        d='M5.00002 3.92503L1.9125 0.837511C1.68469 0.609705 1.31535 0.609705 1.08754 0.837511C0.859736 1.06532 0.859736 1.43466 1.08754 1.66247L4.58754 5.16247C4.81535 5.39027 5.18469 5.39027 5.4125 5.16247L8.9125 1.66247C9.14031 1.43466 9.14031 1.06532 8.9125 0.837511C8.68469 0.609705 8.31535 0.609705 8.08754 0.837511L5.00002 3.92503Z'
        fill='#646464'
      />
      <mask
        id='mask0_230_3376'
        style={{ maskType: 'luminance' }}
        maskUnits='userSpaceOnUse'
        x={0}
        y={0}
        width={10}
        height={6}
      >
        <path
          d='M5.00002 3.92503L1.9125 0.837511C1.68469 0.609705 1.31535 0.609705 1.08754 0.837511C0.859736 1.06532 0.859736 1.43466 1.08754 1.66247L4.58754 5.16247C4.81535 5.39027 5.18469 5.39027 5.4125 5.16247L8.9125 1.66247C9.14031 1.43466 9.14031 1.06532 8.9125 0.837511C8.68469 0.609705 8.31535 0.609705 8.08754 0.837511L5.00002 3.92503Z'
          fill='white'
        />
      </mask>
      <g mask='url(#mask0_230_3376)' />
    </svg>
  )
}

export const ArrowDownCircleIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { height = 16, width = 16, className, ...rest } = props
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      className={className}
      {...rest}
      viewBox='0 0 20 20'
      fill='none'
    >
      <path
        d='M10 19.1C15.0258 19.1 19.1 15.0258 19.1 10C19.1 4.97421 15.0258 0.9 10 0.9C4.97421 0.9 0.9 4.97421 0.9 10C0.9 15.0258 4.97421 19.1 10 19.1Z'
        stroke='#5C5C5C'
        strokeWidth='0.2'
      />
      <path
        d='M10 10.7929L7.73162 8.14645C7.56425 7.95118 7.29289 7.95118 7.12553 8.14645C6.95816 8.34171 6.95816 8.65829 7.12553 8.85355L9.69695 11.8536C9.86432 12.0488 10.1357 12.0488 10.303 11.8536L12.8745 8.85355C13.0418 8.65829 13.0418 8.34171 12.8745 8.14645C12.7071 7.95118 12.4358 7.95118 12.2684 8.14645L10 10.7929Z'
        fill='#565656'
      />
      <mask
        id='mask0_230_3363'
        style={{ maskType: 'luminance' }}
        maskUnits='userSpaceOnUse'
        x={7}
        y={8}
        width={6}
        height={4}
      >
        <path
          d='M10 10.7929L7.73162 8.14645C7.56425 7.95118 7.29289 7.95118 7.12553 8.14645C6.95816 8.34171 6.95816 8.65829 7.12553 8.85355L9.69695 11.8536C9.86432 12.0488 10.1357 12.0488 10.303 11.8536L12.8745 8.85355C13.0418 8.65829 13.0418 8.34171 12.8745 8.14645C12.7071 7.95118 12.4358 7.95118 12.2684 8.14645L10 10.7929Z'
          fill='white'
        />
      </mask>
      <g mask='url(#mask0_230_3363)' />
    </svg>
  )
}

export const ArrowRestoreIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { height = 16, width = 16, className, ...rest } = props
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      width={width}
      height={height}
      className={className}
      {...rest}
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3' />
    </svg>
  )
}
export const EyeIcon = (props: React.SVGProps<SVGSVGElement>) => {
  const { height = 16, width = 16, className, ...rest } = props
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      width={width}
      height={height}
      className={className}
      {...rest}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z'
      />
      <path strokeLinecap='round' strokeLinejoin='round' d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z' />
    </svg>
  )
}