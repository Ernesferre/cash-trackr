import { Table, Column, Model,  DataType, HasMany, BelongsTo, ForeignKey} from'sequelize-typescript'

@Table({
    tableName: 'budgets',
    timestamps: true
})

class Budgets extends Model {
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        primaryKey: true
    })
    name: string

}

export default Budgets