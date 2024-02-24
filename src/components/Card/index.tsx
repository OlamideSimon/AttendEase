import { ReactNode } from 'react'
import {
  Card as UICard,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { MdOutlineMoreHoriz } from 'react-icons/md'
import { Button } from '../Button'

type Cardprops = Partial<{
  title: string | ReactNode | ReactNode[]
  description: string | ReactNode | ReactNode[]
  content: string | ReactNode | ReactNode[]
  footer: string | ReactNode | ReactNode[]
  filled: boolean
}>

export const Card = ({ content, description, footer, title, filled }: Cardprops) => {
  return (
    <UICard className={`${filled ? 'bg-green-500 text-white' : ''}`}>
      <CardHeader>
        {title && <CardTitle>{title}</CardTitle>}
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>{content}</CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </UICard>
  )
}

export const DashboardCard = ({
  content,
  filled,
}: {
  content: ReactNode
  filled?: boolean
}) => {
  return (
    <Card
      title={
        <Button className="flex justify-end w-full !p-0">
          <MdOutlineMoreHoriz />
        </Button>
      }
      content={content}
      filled={filled}
    />
  )
}
