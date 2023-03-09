import cn from "classnames"
import { IconWrapProps } from "./IconWrap.types"

const IconWrap = (
	{
		width = 24,
		height = 24,
		src,
		alt,
		fillColor = 'primary',
		color = 'primary',
	}: IconWrapProps
) => {
	return (
		<div className={cn(`w-[${width}px] h-[${height}px] flex items-center justify-center`)}>
			<img src={src} alt={alt ? alt : src} className={cn('w-full h-full p-0', `fill-${fillColor}-600 text-${color}-600`)}/>
		</div>
	)
}

export default IconWrap