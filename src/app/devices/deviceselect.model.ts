import { Device } from './device.model';
import { SelectItem } from 'primeng/api/selectitem';

export class DeviceItem extends Device implements SelectItem {
    label?: string;
    value: any;
    styleClass?: string;
    icon?: string;
    title?: string;
    disabled?: boolean;
}