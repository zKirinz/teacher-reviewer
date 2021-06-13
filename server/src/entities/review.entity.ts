import {
    BaseEntity,
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    ManyToOne,
} from 'typeorm'
import { Teacher } from './teacher.entity'

@Entity()
export class Review extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @CreateDateColumn()
    createdDate: Date

    @Column('int')
    rating: number

    @Column({ type: 'text' })
    content: string

    @ManyToOne(() => Teacher, (teacher) => teacher.reviews)
    teacher: Teacher
}
