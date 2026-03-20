import IconGridItem from "./IconGridItem.tsx";
import type {TechIcon} from "../../types/techIcon.interface.ts";

type Props = {
    items: TechIcon[]
    dim?: boolean
}

export default function IconGrid(props: Props) {
    const {items, dim = false} = props;
    return (
        <div className="flex flex-wrap items-start gap-x-8 gap-y-6">
            {items.map((item, index) => (
                <IconGridItem
                    key={item.name}
                    item={item}
                    dim={dim}
                    index={index}
                />
            ))}
        </div>
    )
}
