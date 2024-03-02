import { toast } from 'react-toastify';
import { _toastVariants } from './constant';

const showMessage = (options, optionalType) => {
  const _options = { message: options?.message, variant: options?.variant };
  if (typeof options === 'string') {
    _options.message = options;
    _options.variant = optionalType;
  }

  const { variant, message } = _options;
  switch (variant) {
    case _toastVariants.Success:
      toast.success(message);
      break;
    case _toastVariants.Error:
      toast.error(message);
      break;
    default:
      toast.info(message);
      break;
  }
};

export { showMessage };
