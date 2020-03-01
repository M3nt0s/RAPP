import { Employee } from './employee.model';
import { SelectItem } from 'primeng/api/selectitem';

export class EmployeeItem extends Employee implements SelectItem {
    label?: string;
    value: any;
    styleClass?: string;
    icon?: string;
    title?: string;
    disabled?: boolean;
}