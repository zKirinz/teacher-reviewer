import { BaseEntity, Entity, Column, PrimaryColumn, OneToMany } from 'typeorm'
import { Review } from './review.entity'

@Entity()
export class Teacher extends BaseEntity {
    @PrimaryColumn('text')
    code: string

    @Column('float', { default: 0 })
    rating: number

    @Column('int', { default: 0 })
    noReviews: number

    @Column('float', { default: 0 })
    oneStarPercentage: number

    @Column('float', { default: 0 })
    twoStarPercentage: number

    @Column('float', { default: 0 })
    threeStarPercentage: number

    @Column('float', { default: 0 })
    fourStarPercentage: number

    @Column('float', { default: 0 })
    fiveStarPercentage: number

    @OneToMany(() => Review, (review) => review.teacher, { cascade: ['insert'] })
    reviews: Review[]
}
