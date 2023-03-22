import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectLoadingStatus,
  selectError,
} from '../Redux/UserAuth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoading = useSelector(selectLoadingStatus);
  const error = useSelector(selectError);
  const user = useSelector(selectUser);

  return {
    isLoggedIn,
    isRefreshing,
    isLoading,
    error,
    user,
  };
};
