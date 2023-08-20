import CatalogRoute from '../routespage/catalogRoute';
import DetailRoute from '../routespage/detailRoute';

const rootRoute = [
	...CatalogRoute,
    ...DetailRoute
];

export default rootRoute;
