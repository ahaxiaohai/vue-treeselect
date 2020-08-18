import Treeselect from './components/Treeselect'
import treeselectMixin from './mixins/treeselectMixin'
import renderInput from './components/Input'
import './style.less'

export default Treeselect
export { Treeselect, treeselectMixin,renderInput }
export {
  // Delayed loading.
  LOAD_ROOT_OPTIONS,
  LOAD_CHILDREN_OPTIONS,
  ASYNC_SEARCH,
} from './constants'

export const VERSION = PKG_VERSION
