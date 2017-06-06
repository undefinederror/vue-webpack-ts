declare module "*.vue" {
  import Vue from 'vue'
  export default typeof Vue
}
declare const require: {
    <T>(path: string): T;
    (paths: string[], callback: (...modules: any[]) => void): void;
    ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void, name: string) => void;
};
