import { getAllProducts } from '@/services/product';
import { ProductProps } from '@/utils/types';
import React, { useEffect, useState } from 'react'

const ProductsTable = () => {
    const [productList, setProductList] = useState<ProductProps[]>();
    
  
    useEffect(() => {
      getAllProducts()
        .then((res) => {
          setProductList(res.data);
          console.log(res.data);
          
        })
        .catch((e) => {
        
        });
    }, []);
  
    return (
        <div className="bg-white shadow rounded-lg p-4 mb-4 sm:p-6 xl:p-8 ">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">All Offers</h3>
              <span className="text-base font-normal text-gray-500">
                This is a list of all crypto selling by users
              </span>
            </div>
          </div>
          <div className=" w-full w-6/6">
            <div className="bg-white shadow-md rounded">
              <table className="min-w-max w-full table-auto">
                <thead>
                  <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">Crypto</th>
                    <th className="py-3 px-6 text-left">Value</th>
                    <th className="py-3 px-6 text-left">Seller</th>
                    <th className="py-3 px-6 text-center">Quantity</th>
                    <th className="py-3 px-6 text-center">Total</th>
                    <th className="py-3 px-6 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                  {/* {offersList &&
                    offersList?.map((offer) => {
                      return (
                        <Fragment key={offer.id}>
                          <OfferRow
                            offer={{
                              id: offer.id,
                              User: {
                                pseudo: offer.User.pseudo,
                              },
                              amount: offer.amount,
                              created_at: "",
                              id_user: "",
                              Crypto: {
                                id: offer.Crypto.id,
                                name: offer.Crypto.name,
                                quantity: 0,
                                value: Math.round(offer.Crypto.value * 100) / 100,
                                image: offer.Crypto.image,
                                updated_at: "",
                              },
                            }}
                            setIsReloadNeeded={setIsReloadNeeded}
                          />
                        </Fragment>
                      );
                    })} */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
}

export default ProductsTable
