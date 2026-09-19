// The editor uses this finite Zylora compatibility surface instead of an
// arbitrary deep proxy. Unknown paths fail loudly during development.
export {
  api,
  default,
  configureZyloraTrpcContext,
  clearZyloraTrpcContext,
} from '../trpc-stub';
