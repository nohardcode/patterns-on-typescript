export default interface Pizza {
    name: string;
    description: string;
    prepare: () => void;
    cook: () => void;
}
